<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15.916 13.168H21c-.417 3.663-3.057 6.7-6.493 7.74L3.092 9.494A9.15 9.15 0 0 1 19.013 6.46M3 14.487 9.514 21a9.17 9.17 0 0 1-6.43-6.217z\"/>";
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
