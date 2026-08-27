<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M11.994 21a12.01 12.01 0 0 1-7.433-5.7A12 12 0 0 1 3.487 6a12.01 12.01 0 0 0 8.507-3A12.01 12.01 0 0 0 20.5 6c.576 1.96.642 4.033.193 6.025M15.996 22 21 17m0 0v4.5m0-4.5h-4.503\"/>";
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
