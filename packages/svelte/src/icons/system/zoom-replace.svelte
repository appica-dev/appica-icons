<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m21 21-6-6M3.291 8a7 7 0 0 1 5.077-4.806 7.02 7.02 0 0 1 8.242 4.403M17 4v4h-4m3.705 4a7 7 0 0 1-5.074 4.798 7.02 7.02 0 0 1-8.241-4.403M3 16v-4h4\"/>";
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
