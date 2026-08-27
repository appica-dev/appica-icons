<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M16.372 12.476 12 3 4.03 20.275c-.07.2-.018.424.134.572.15.148.374.193.57.116l7.266-2.463m5 2.5 4-4m-5 2a3 3 0 1 0 6 0 3 3 0 0 0-6 0\"/>";
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
