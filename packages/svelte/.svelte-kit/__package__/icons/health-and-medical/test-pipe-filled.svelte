<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path fill-rule=\"evenodd\" d=\"M15.615 2.536a.976.976 0 0 0-1.38 1.378l.266.266L3.35 15.33a3.76 3.76 0 0 0 5.32 5.318l11.148-11.15.266.266a.976.976 0 0 0 1.38-1.379zm.264 3.022L9.44 12h5.121l3.88-3.881z\"/><path d=\"M19.537 14.258a.976.976 0 0 0-1.35-.07l-.073.07-1.463 1.56-.02.021a2.925 2.925 0 1 0 4.388 0l-.02-.022z\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
