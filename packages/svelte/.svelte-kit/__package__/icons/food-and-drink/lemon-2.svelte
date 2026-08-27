<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M18 4a2 2 0 0 1 1.186 3.611c1.55 2.94.872 6.917-1.892 9.682-2.766 2.765-6.744 3.442-9.682 1.892a2 2 0 1 1-2.796-2.796c-1.55-2.94-.873-6.917 1.892-9.682s6.743-3.442 9.682-1.892A2 2 0 0 1 18 4\"/>";
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
