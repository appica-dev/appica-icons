<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15.536 15.535 21 10M3 14l5.464-5.535M12 12h.01m3.526 3.536a5 5 0 1 0-7.071-7.072 5 5 0 0 0 7.071 7.072\"/>";
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
