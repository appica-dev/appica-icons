<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m12 21-8-4m8 4 8-4m-8 4v-6m-8 2V7m0 10 3.529-2.206M4 7l8-4M4 7l4.323 2.702M12 3l8 4m-8-4v5m8-1v10m0-10-5.391 3.37M20 17l-3.587-2.242M3 17a1 1 0 1 0 2 0 1 1 0 0 0-2 0M3 7a1 1 0 1 0 2 0 1 1 0 0 0-2 0m16 10a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0-10a1 1 0 1 0 2 0 1 1 0 0 0-2 0m-8-4a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0 18a1 1 0 1 0 2 0 1 1 0 0 0-2 0m-1.9-6a2.1 2.1 0 0 1-.648-4.098C8.734 9.254 9.771 8 11.5 8c1.694 0 2.906 1.203 3.23 2.8h.17a2.1 2.1 0 0 1 .202 4.19L14.9 15z\"/>";
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
