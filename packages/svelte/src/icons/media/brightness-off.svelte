<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M11.997 3.004v5m0 3.998V21M5.64 5.635a8.998 8.998 0 0 0 12.715 12.734m1.68-2.317A8.998 8.998 0 0 0 7.965 3.957m4.532 4.546 4.149-4.149m-4.649 9.648 1.025-.983m2.064-1.98 4.279-4.106M11.997 19.6l3.79-3.789m1.998-2 3.053-3.053M3 3.004 20.995 21\"/>";
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
