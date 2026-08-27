<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 14c.83.642 2.077 1.017 3.5 1 1.423.017 2.67-.358 3.5-1s2.077-1.017 3.5-1c1.423-.017 2.67.358 3.5 1M8 3a2.4 2.4 0 0 0-1 2 2.4 2.4 0 0 0 1 2m4-4a2.4 2.4 0 0 0-1 2 2.4 2.4 0 0 0 1 2m4.746 9.726a3 3 0 1 0 .252-5.555M3 10h14v5a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6z\"/>";
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
