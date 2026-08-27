<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M13.981 8l.245-.322c.69-.899 1.581-2.058 1.171-3.202C15.089 3.621 12.993 2 12 2S8.911 3.621 8.604 4.476c-.41 1.144.48 2.303 1.171 3.202L10.02 8m3.961 0H10.02m3.961 0h.52m-4.48 0H9.5m5 0l.893 5M14.5 8H16m-.607 5H8.607m6.786 0l.893 5m-.893-5H16m-7.393 0L9.5 8m-.893 5l-.893 5m.893-5H8m1.5-5H8m8.286 10H7.714m8.571 0L17 22m-.714-4h.214m-8.786 0L7 22m.714-4H7.5m9.5 4H7m10 0h2M7 22H5M19 7.5l2-.5m-2 3.5l2 .5M5 7.5L3 7m2 3.5L3 11\"/>";
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
