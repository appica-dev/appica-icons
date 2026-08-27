<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M13.012 20.687q-.5.178-1.018.313a12.01 12.01 0 0 1-7.433-5.7A12 12 0 0 1 3.487 6a12.01 12.01 0 0 0 8.507-3A12.01 12.01 0 0 0 20.5 6c.433 1.472.575 2.998.436 4.495M21 15h-2.502a1.502 1.502 0 0 0-1.061 2.56c.281.282.663.44 1.061.44h1a1.502 1.502 0 0 1 1.062 2.56c-.281.282-.663.44-1.061.44h-2.502M19 21v1m0-8v1\"/>";
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
