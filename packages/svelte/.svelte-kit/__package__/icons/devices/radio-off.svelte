<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14 3 9.014 5M6.139 6.15l-1.51.604A1 1 0 0 0 4 7.682v11.323a1 1 0 0 0 1 1h14a1 1 0 0 0 .708-.294M20 16.005v-8a1 1 0 0 0-1-1h-8m-4 0H4.5M4 12h8m4 0h4M7 12v-2m6 6v.01M3 3l18 18\"/>";
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
