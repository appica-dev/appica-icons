<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M16.073 20.3a2.999 2.999 0 0 0 4.526-3.798l-2.095-3.227a.6.6 0 0 0-1.005 0L15.4 16.502a3 3 0 0 0 .67 3.798m-11.998 0a2.999 2.999 0 0 0 4.526-3.798l-2.095-3.227a.6.6 0 0 0-1.005 0L3.4 16.502a3 3 0 0 0 .672 3.798m6-10a2.999 2.999 0 0 0 4.526-3.798l-2.095-3.227a.6.6 0 0 0-1.005 0L9.4 6.502a3 3 0 0 0 .672 3.798\"/>";
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
