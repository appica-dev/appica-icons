<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M16.634 13.043 12 3 4.03 20.275c-.07.2-.018.424.134.572.15.148.374.193.57.116l7.266-2.463.955.324M16 22l5-5m0 0v4.5m0-4.5h-4.5\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
