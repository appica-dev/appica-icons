<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M17.5 11.5 20 10M6.5 11.5 4 10m8 3h.01M12 16h.01M12 3a4 4 0 0 1 2.906 6.75 6 6 0 1 1-5.81 0A4 4 0 0 1 12 3\"/>";
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
