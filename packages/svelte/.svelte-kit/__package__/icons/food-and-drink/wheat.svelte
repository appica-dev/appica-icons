<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12.015 21.514v-3.75m0 .25q-1.495-.399-2.99-.801a4.986 4.986 0 0 1-3.524-6.105l.43-1.604 2.408.644a4.98 4.98 0 0 1 3.676 4.426m0 3.44v-3.44m0 3.44 2.99-.801a4.986 4.986 0 0 0 3.525-6.105l-.43-1.604-2.408.644a4.98 4.98 0 0 0-3.677 4.426m1.73-3.41a4.893 4.893 0 0 0 0-6.92l-1.73-1.73-1.73 1.73a4.912 4.912 0 0 0-1.433 3.46 4.9 4.9 0 0 0 1.433 3.46\"/>";
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
