<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 21h7v-3a2 2 0 0 1 4 0v3h7M6 21v-9m0 0h12M6 12a3 3 0 0 1-3-3c2.044.057 4.049-.505 5.685-1.596C10.32 6.314 11.49 4.76 12 3c.51 1.76 1.68 3.313 3.315 4.404S18.956 9.057 21 9a3 3 0 0 1-3 3m0 9v-9\"/>";
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
