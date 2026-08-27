<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25m-5.85 8.775a.975.975 0 0 0-.975.975A6.825 6.825 0 0 0 12 18.825a.975.975 0 1 0 0-1.95A4.875 4.875 0 0 1 7.125 12a.975.975 0 0 0-.975-.975\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
