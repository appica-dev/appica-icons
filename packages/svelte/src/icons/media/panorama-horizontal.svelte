<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4.338 5.53q7.658 2.893 15.317 0A1.002 1.002 0 0 1 21 6.462v10.982c0 .69-.692 1.198-1.34.96q-7.66-2.893-15.321 0A.993.993 0 0 1 3 17.471V6.462a1 1 0 0 1 .868-.983c.158-.021.32-.004.47.05z\"/>";
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
