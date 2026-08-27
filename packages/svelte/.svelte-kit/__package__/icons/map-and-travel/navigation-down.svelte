<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M16.529 12.815 12 3 4.03 20.275c-.07.2-.018.424.134.572.15.148.374.193.57.116l7.266-2.463m7-2.5v6m0 0 3-3m-3 3-3-3\"/>";
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
