<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20 15l-3.151 1.064a1.25 1.25 0 0 0-.785.785L15 20m-1.057-6.987l5.016-1.957a1.64 1.64 0 0 0-.116-3.087L6.116 4.074a1.64 1.64 0 0 0-2.042 2.042l3.895 12.727a1.64 1.64 0 0 0 3.087.116l1.957-5.017c.166-.426.503-.763.93-.929z\"/>";
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
